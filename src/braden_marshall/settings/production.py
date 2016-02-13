"""
Extends the settings defined in 'base.py' to better fit our project in
the production state.

Read before deployment:
https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/
"""

try:
    from braden_marshall.settings.base import *  # NOQA
except ImportError as e:
    pass


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = []

# SECURITY WARNING: keep the secret key used in production secret!
# To keep us from pushing the deployed 'SECRET_KEY' into version control,
# we store it in a local text-file that will not be commited.
with open('/local/production_secret_key.txt') as f:
    SECRET_KEY = f.read().strip()