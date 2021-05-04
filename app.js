// FOCUS IN AND OUT OF INPUT
function inputFocus() {
  const inputBox = document.querySelectorAll('input');
  const textareaBox = document.querySelector('textarea');

  inputBox.forEach(input => {
    input.addEventListener('blur', () => {
      const inputValue = input.value;
      if (inputValue === '') {
        input.classList.remove('has-value');
      } else {
        input.classList.add('has-value');
      }
    });
  });

  textareaBox.addEventListener('blur', blurredTextarea);
  function blurredTextarea() {
    const inputValue = textareaBox.value;
    if (inputValue === '') {
      textareaBox.classList.remove('has-value');
    } else {
      textareaBox.classList.add('has-value');
    }
  }

}
inputFocus();

// THE SUBMIT BUTTOM ANIMATION
function submitAnimation() {
  const inputs = document.querySelectorAll('input');
  const textareaBox = document.querySelector('textarea');
  const contactForm = document.querySelector('#contact-form');
  console.log(inputs);
  const index = inputs.length;
  console.log(index);

  const inputAnimate = () => {
    inputs.forEach((input, index) => {
      input.addEventListener('keyup', (ev) => {
        if (ev.target.value !== '' && input.oninput) {
          const submit = document.querySelector('#submit-btn');
          submit.classList.add('active-btn');
        } else {
          const submit = document.querySelector('#submit-btn');
          submit.classList.remove('active-btn');
        }
      });
    });
  }
  inputAnimate();

  textareaBox.addEventListener('keyup', (e) => {
    if (e.target.value !== '' /*&& inputAnimate()*/) {
      const submit = document.querySelector('#submit-btn');
      submit.classList.add('active-btn');
      // console.log(inputAnimate(e.target.value))
    } else {
      const submit = document.querySelector('#submit-btn');
      submit.classList.remove('active-btn');
    }
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
      if (input.value !== '') {
        console.log(input.value)
      }

    });
    if (textareaBox.value !== '') {
      console.log(textareaBox.value)
    }
    const submit = document.querySelector('#submit-btn').classList.remove('active-btn');
    contactForm.reset();
    document.querySelectorAll('input').forEach(input => input.classList.remove('has-value'));
    document.querySelector('textarea').classList.remove('has-value');
  });
}
submitAnimation();

function activeInput() {
  const firstname = document.querySelector('.firstname').value,
    lastname = document.querySelector('.lastname').value,
    email = document.querySelector('.email').value,
    website = document.querySelector('.website').value,
    comment = document.querySelector('.write').value;

  if (firstname !== '' && lastname !== '' && email !== '' && website !== '' && comment !== '') {
    const proceed = document.querySelector('#submit-btn');
    proceed.classList.add('active-btn');
  }
}
// activeInput();
