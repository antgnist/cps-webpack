import '../scss/style.scss';
import mobileSlider from './services';
import './babel'

console.log('Works!');
mobileSlider();




document.addEventListener('click', function (event) {
  let target = event.target;

  let showMoreButton = target.closest('.show-more');
  if (showMoreButton) {
    let spoiler = showMoreButton.previousElementSibling;
    if (spoiler.classList.contains('content-block__spoiler')) {
      spoiler.classList.remove('content-block__spoiler');
      showMoreButton.remove();
    }
    return;
  }

  /*-----------------------------*/

  let burger = target.closest('.burger-button');
  if (burger) {
    document
      .querySelector('.side-navigation__wrapper')
      .classList.toggle('side-navigation__wrapper--open');
    document
      .querySelector('.side-navigation__overlay')
      .classList.toggle('side-navigation__overlay--open');
    document
      .querySelector('.side-navigation')
      .classList.toggle('side-navigation--open');
    document.querySelectorAll('.burger-button').forEach((elem) => {
      elem.classList.toggle('burger-button--open');
    });

    return;
  }

  if (target.closest('.side-navigation__overlay')) {
    document
      .querySelector('.side-navigation__wrapper')
      .classList.remove('side-navigation__wrapper--open');
    document
      .querySelector('.side-navigation__overlay')
      .classList.remove('side-navigation__overlay--open');
    document
      .querySelector('.side-navigation')
      .classList.remove('side-navigation--open');
    document.querySelectorAll('.burger-button').forEach((elem) => {
      elem.classList.remove('burger-button--open');
    });
    return;
  }

  /*------------------------------------------------*/

  let callbackEnter = target.closest('.callback-enter');
  if (callbackEnter) {
    sidebarFormOpen();

    let templateContent = document.getElementById('template-callback').content;
    let copyNode = templateContent.cloneNode(true);

    document.querySelector('.sidebar__content').append(copyNode);
    document.querySelector('.sidebar__input').focus();

    let formSidebar = document.querySelector('.sidebar__form');

    formSidebar.onsubmit = async (e) => {
      e.preventDefault();
      let formData = new FormData(formSidebar);
      sidebarFormClose();

      let response = await fetch(
        'https://webhook.site/c4eb1c67-4d73-4857-9ac9-c257d0368338',
        {
          method: 'POST',
          body: formData,
        }
      );

      console.log(
        'Запрос Обратного звонка отправлен',
        'Статус: ',
        response.status
      );
    };

    return;
  }

  /*------------------------------------------------*/

  let feedbackEnter = target.closest('.feedback-enter');
  if (feedbackEnter) {
    sidebarFormOpen();

    let templateContent = document.getElementById('template-feedback').content;
    let copyNode = templateContent.cloneNode(true);

    document.querySelector('.sidebar__content').append(copyNode);
    document.querySelector('.sidebar__input').focus();

    let formSidebar = document.querySelector('.sidebar__form');

    formSidebar.onsubmit = async (e) => {
      e.preventDefault();
      let formData = new FormData(formSidebar);
      sidebarFormClose();

      let response = await fetch(
        'https://webhook.site/c4eb1c67-4d73-4857-9ac9-c257d0368338',
        {
          method: 'POST',
          body: formData,
        }
      );

      console.log(
        'Запрос Обратной Связи отправлен',
        'Статус: ',
        response.status
      );
    };

    return;
  }

  if (
    target.closest('.sidebar__overlay--open') ||
    target.closest('.sidebar__close')
  ) {
    sidebarFormClose();
  }

  function sidebarFormOpen() {
    document
      .querySelector('.sidebar__wrapper')
      .classList.toggle('sidebar__wrapper--open');
    document
      .querySelector('.sidebar__overlay')
      .classList.toggle('sidebar__overlay--open');
    document.querySelector('.sidebar').classList.toggle('sidebar--open');

    document
      .querySelector('.sidebar__content')
      .querySelectorAll('*')
      .forEach((child) => child.remove());
  }

  function sidebarFormClose() {
    document
      .querySelector('.sidebar__wrapper')
      .classList.remove('sidebar__wrapper--open');
    document
      .querySelector('.sidebar__overlay')
      .classList.remove('sidebar__overlay--open');
    document.querySelector('.sidebar').classList.remove('sidebar--open');

    document
      .querySelector('.sidebar__content')
      .querySelectorAll('*')
      .forEach((child) => child.remove());

    return;
  }
});
