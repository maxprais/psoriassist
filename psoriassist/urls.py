from django.conf.urls import url
from . import views

app_name = 'psoriassist'
urlpatterns = [
    url(r'^$', views.Index.as_view(), name='index'),
    url(r'^camera/$', views.TakePhoto.as_view(), name='camera'),
    url(r'^welcome/$', views.Welcome.as_view(), name='welcome'),
    url(r'^medication/$', views.Medication.as_view(), name='medication'),
    url(r'^emotional_management/$', views.Emotion_Management.as_view(), name='management'),
    url(r'^doctor/$', views.Doctor.as_view(), name='doctor'),
    url(r'^graphs/$', views.Graph.as_view(), name='graphs'),
    url(r'^medicine/$', views.Medicine.as_view(), name='medicine'),
    url(r'^sendata/$', views.SaveConversationHistory.as_view(), name='data'),
    url(r'^rload/$', views.ReloadWelcomePage.as_view(), name='rload'),
    url(r'^profile/$', views.Profile.as_view(), name='profile'),
    url(r'^telemed/$', views.TeleMed.as_view(), name='telemed')
]
