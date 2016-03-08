import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "novartis.settings")
django.setup()

from psoriassist.models import AppUser, Message, Lesion, MentalState, Medication, Rating, Doctor, Appointment, LesionSection, \
    PASIScore

from django.contrib.auth.models import User


def create_user():

    name = User.objects.create_user('john', 'lennon@thebeatles.com', 'johnpassword')
    
    new_user = AppUser(user=name, age=22, bio='hi im max', isMentor=True)
    new_user.save()



def update_lesion():

    name = AppUser.objects.get(bio='hi im max')
    lesion_obj = Lesion(user=name, name='micahlesion1', lesion_location='head', date_taken=01/01/2015, thickness=4,
                        redness=3, scale=1)
    lesion_obj.save()

update_lesion()