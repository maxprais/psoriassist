from django.conf.urls import url
from . import views

app_name = 'psoriassist'
urlpatterns = [
    url(r'^$', views.Index.as_view(), name='index'),
    url(r'^rate-medication$', views.Rate.as_view(), name='rate'),
    url(r'^camera/$', views.TakePhoto.as_view(), name='camera'),
    url(r'^welcome/$', views.Welcome.as_view(), name='welcome'),
    url(r'^sendata/$', views.SaveConversationHistory.as_view(), name='data'),
]
