from .models import AppUser, Message, Lesion, MentalState, Medication, Rating, Doctor, Appointment, LesionSection, \
    PASIScore, User


def create_user():

    name = User.objects.filter(username='maxprais')
    
    new_user = AppUser(age=22, bio='hi im max')
    new_user.save()

create_user()

def update_lesion():

    lesion_obj = Lesion(user='Micah', name='micahlesion1', lesion_location='head', date_taken=01/01/2015, thickness=4,
                        redness=3, scale=1)
    lesion_obj.save()

update_lesion()