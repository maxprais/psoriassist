# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-03-14 13:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psoriassist', '0006_computerconversation'),
    ]

    operations = [
        migrations.AddField(
            model_name='computerconversation',
            name='topic',
            field=models.CharField(max_length=500, null=True),
        ),
    ]