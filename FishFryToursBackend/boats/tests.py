from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from boats.models import Boat


class BoatTests(APITestCase):
    def test_get_boats(self):
        """
        Ensure we can get a list of boats
        """
        url = reverse('boats-list')
        Boat.objects.create(**{'name': 'New boat', 'status': 'docked'})
        Boat.objects.create(**{'name': 'Second boat', 'status': 'inbound_to_harbour'})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.json()), 2)
        self.assertEqual(response.json()[0], {'id': 1, 'name': 'New boat', 'status': 'docked'})

    def test_create_boat(self):
        """
        Ensure we can create a new boat object.
        """
        url = reverse('boats-list')
        data = {'name': 'New boat', 'status': 'docked'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Boat.objects.count(), 1)
        self.assertEqual(Boat.objects.get().name, 'New boat')

    def test_update_boat(self):
        """
        Ensure we can edit a boat object and it does not create another boat.
        """
        url = reverse('boats-list')
        # Create a new boat
        data = {'name': 'New boat', 'status': 'docked'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Boat.objects.count(), 1)

        url = reverse('boats-detail', kwargs={'pk': 1})
        response_updated = self.client.patch(url, data={'id': response.json()['id'], 'name': 'Second Name'},
                                             format='json')
        self.assertEqual(response_updated.status_code, status.HTTP_200_OK)
        self.assertEqual(Boat.objects.count(), 1)
        self.assertEqual(Boat.objects.get(pk=response.json()['id']).name, 'Second Name')

