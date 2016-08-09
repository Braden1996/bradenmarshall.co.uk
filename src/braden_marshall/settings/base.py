"""
Django settings for braden_marshall project.

Settings are dependent on the environment in use (development/production).
The default setting environment is defined in 'braden_marshall/wsgi.py'

For more information on this file, see:
https://docs.djangoproject.com/en/1.9/topics/settings/

For the full list of settings and their values, see:
https://docs.djangoproject.com/en/1.9/ref/settings/

NOTES:
- Please follow the Django-PEP8 coding-style
  https://docs.djangoproject.com/en/1.9/internals/contributing/writing-code/coding-style/
"""

import os


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Application definition

INSTALLED_APPS = [
    # Django applications
    'django.contrib.admin',
    'django.contrib.auth',  # Dependency for 'account'
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',  # Dependency for 'account'
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # Third-party applications
    'account',  # https://github.com/pinax/django-user-accounts
    # Project applications
]

MIDDLEWARE_CLASSES = [
    # Django middleware
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    # Third-party middleware
    "account.middleware.LocaleMiddleware",
    "account.middleware.TimezoneMiddleware",
    # Project middleware
]

ROOT_URLCONF = 'braden_marshall.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['braden_marshall/templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                # Django context-processors
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                # Third-party context-processors
                'account.context_processors.account',
                # Project context-processors
            ],
        },
    },
]

WSGI_APPLICATION = 'braden_marshall.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-gb'

TIME_ZONE = 'Europe/London'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    'braden_marshall/static'
]


# django.contrib.sites
SITE_ID = 1