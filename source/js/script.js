      document.querySelectorAll('*').forEach(el => {
        [...el.classList].filter(cls => cls.endsWith('--nojs')).forEach(cls => el.classList.remove(cls));
      });

      document.addEventListener('DOMContentLoaded', function () {
        const toggler = document.querySelector('.page-header__toggler');
        const menu = document.querySelector('.page-header__menu');

        if (!toggler || !menu) return;
        toggler.classList.add('page-header__toggler--closed');
        toggler.addEventListener('click', function () {
          const isClosed = toggler.classList.contains('page-header__toggler--closed');

          if (isClosed) {
            toggler.classList.remove('page-header__toggler--closed');
            toggler.classList.add('page-header__toggler--opened');
            menu.classList.add('page-header__menu--shown');
          } else {
            toggler.classList.remove('page-header__toggler--opened');
            toggler.classList.add('page-header__toggler--closed');
            menu.classList.remove('page-header__menu--shown');
          }
        });
      });
