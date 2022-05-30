# Generated by Django 4.0.4 on 2022-05-28 05:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BaseModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('modified_on', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Boat',
            fields=[
                ('basemodel_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='boats.basemodel')),
                ('name', models.CharField(max_length=50)),
                ('status', models.CharField(choices=[('docked', 'Docked'), ('outbound_to_sea', 'Outbound to Sea'), ('inbound_to_harbour', 'Inbound to Harbour'), ('maintenance', 'Maintenance')], max_length=50)),
            ],
            bases=('boats.basemodel',),
        ),
    ]