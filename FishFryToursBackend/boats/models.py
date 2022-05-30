from django.db import models
from django.utils.translation import gettext_lazy as _


# Create your models here.
# While not saving any code in this single model application, one should typically have a base class for common fields
# However, in the interests of time, several things like implementing UUIDs over sequential IDS and having logging
# of which user is modifying the data will not be included. It is difficult to implement every best practice in a
# weekend exercise.
class BaseModel(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)


class Boat(BaseModel):
    class BoatStatusEnum(models.TextChoices):
        DOCKED = 'docked', _('Docked')
        OUTBOUND_TO_SEA = 'outbound_to_sea', _('Outbound to Sea')
        INBOUND_TO_HARBOUR = 'inbound_to_harbour', _('Inbound to Harbour')
        MAINTENANCE = 'maintenance', _('Maintenance')

    name = models.CharField(max_length=50)
    status = models.CharField(max_length=50, choices=BoatStatusEnum.choices, default=BoatStatusEnum.DOCKED)
