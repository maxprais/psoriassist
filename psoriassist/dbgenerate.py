import os, django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "novartis.settings")
django.setup()

from psoriassist.models import AppUser, Message, Lesion, MentalState, Medication, Rating, Doctor, Appointment, LesionSection, \
    PASIScore

from django.contrib.auth.models import User

name_list = ['john', 'jack', 'jake', 'micah', 'max', 'erin', 'kovler']
pasi_list = ['3.5', '2.7', '3.9', '7.5', '5.1', '1.6', '4.4']
# section_name_list = ['head', 'legs', 'trunk', 'head', 'arms', 'trunk', 'trunk']



def create_user():

    name_list = ['john', 'jack', 'jake', 'micah', 'max', 'erin', 'kovler']
    email_list = ['max@gmail.com', 'erin@gmail.com', 'kovler@gmail.com']
    password_list = ['4312', '4415', '8956191']

    for n, e, p in zip(name_list, email_list, password_list):
        new = User.objects.create_user(n, e, p)
    for i in range(len(name_list)):
        new = User.objects.get(username=name_list[i])
        new_user = AppUser(user=new, age=22, bio='hi im' + name_list[i], isMentor=False)
        new_user.save()

# create_user()


def update_lesion():
    lesion_location_list = ['head', 'legs', 'trunk', 'head', 'arms', 'trunk', 'trunk']
    thickness_list = ['1', '4', '3', '4', '1', '2', '1']
    redness_list = ['3', '2', '2', '3', '1', '2', '1']
    scale_list = ['1', '1', '4', '4', '1', '3', '2']

    for user, l, t, r, s in zip(name_list, lesion_location_list, thickness_list, redness_list, scale_list):
        location = LesionSection.objects.filter(section_name=l)
        user_instance = User.objects.get(username=user)
        new = AppUser.objects.get(user=user_instance)
        lesion_obj = Lesion(user=new, name=user + 'lesion1', lesion_location=location[0], date_taken='2015-01-01 12:54:21',
                            thickness=t, redness=r, scale=s)
        lesion_obj.save()

    # for i in range(len(name_list)):
    #     new = User.objects.get(username=name_list[i])
    #     lesion_obj = Lesion(user=new, name=name_list[i] + 'lesion1', lesion_location='head', date_taken=01/01/2015, thickness=4,
    #                     redness=3, scale=1)
    #     lesion_obj.save()

# update_lesion()

def pasi():
    pasi_list = ['3.5', '2.7', '3.9', '7.5', '5.1', '1.6', '4.4']

    for name, p in zip(name_list, pasi_list):
        user_instance = User.objects.get(username=name)
        new = AppUser.objects.get(user=user_instance)
        pasi_obj = PASIScore(user = new, score = p)
        pasi_obj.save()

# pasi()

#section-name, pasi
def update_lesion_section():
    section_name_list = ['head', 'legs', 'trunk', 'head', 'arms', 'trunk', 'trunk']

    for section, pasi in zip(section_name_list, pasi_list):
        pasi_instance = PASIScore.objects.get(score=pasi)
        section_obj = LesionSection(section_name=section, PASI = pasi_instance)
        section_obj.save()
# update_lesion_section()


