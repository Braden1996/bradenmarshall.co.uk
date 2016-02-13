"""
Extends the settings defined in 'base.py' to better fit our project in
the development state.

These are not to be used in production!
"""

try:
    from braden_marshall.settings.base import *  # NOQA
except ImportError as e:
    pass

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '*s&_3f625j!3h#re=j+qcq(t*hmg3y_28!8-l-l650abr1*+_*'