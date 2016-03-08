import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "novartis.settings")
django.setup()

from psoriassist.models import AppUser, Message, Lesion, MentalState, Medication, Rating, Doctor, Appointment, LesionSection, \
    PASIScore

from django.contrib.auth.models import User


def create_user():

    name_list = ['jack', 'jake', 'micah']
    email_list = ['jack@gmail.com', 'jake@gmail.com', 'micah@gmail.com']
    password_list = ['1234', '4567', '891011']

    # for n, e, p in zip(name_list, email_list, password_list):
    #     new = User.objects.create_user(n, e, p)
    for i in range(len(name_list)):
        new = User.objects.get(username=name_list[i])
        new_user = AppUser(user=new, age=22, bio='hi im' + name_list[i], isMentor=False)
        new_user.save()

create_user()


def update_lesion():

    name = AppUser.objects.get(bio='hi im max')
    lesion_obj = Lesion(user=name, name='micahlesion1', lesion_location='head', date_taken=01/01/2015, thickness=4,
                        redness=3, scale=1)
    lesion_obj.save()

# update_lesion()