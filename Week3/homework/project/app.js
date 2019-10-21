const items = [
  {
    tag: 'div',
    class: 'header',
    childs: [
      {
        tag: 'h1',
        class: 'header-text',
        content: 'tIp CaLcuLaTOR'
      }
    ]
  },
  {
    tag: 'div',
    class: 'body',
    childs: [
      {
        tag: 'form',
        attributes: [
          {
            name: 'action',
            value: '#'
          },
          {
            name: 'method',
            value: 'post'
          }
        ],
        childs: [
          {
            tag: 'h3',
            class: 'body-questions',
            content: 'How much was your bill?'
          },
          {
            tag: 'label',
            childs: [
              {
                teg: 'span',
                content: '$ '
              },
              {
                tag: 'input',
                attributes: [
                  {
                    name: 'type',
                    value: 'number'
                  },
                  {
                    name: 'value',
                    value: 40
                  },
                  {
                    name: 'name',
                    value: 'amount'
                  },
                  {
                    name: 'required',
                    value: true
                  }
                ]
              }
            ]
          },
          {
            tag: 'h3',
            class: 'body-questions',
            content: 'How was your service?'
          },
          {
            tag: 'select',
            attributes: [
              {name: 'name', value: 'percent'},
              {name: 'required', value: true},
            ],
            childs: [
              {
                tag: 'option',
                attributes: [
                  {
                    name: 'value',
                    value: ''
                  }
                ],
                content: '-- Choose an Option --',
              },
              {
                tag: 'option',
                attributes: [
                  {
                    name: 'value',
                    value: 30
                  }
                ],
                content: '30% - Outstanding',
              },
              {
                tag: 'option',
                attributes: [
                  {
                    name: 'value',
                    value: 20
                  }
                ],
                content: '20% - Good',
              },
              {
                tag: 'option',
                attributes: [
                  {
                    name: 'value',
                    value: 15
                  }
                ],
                content: '15% - It was OK',
              },
              {
                tag: 'option',
                attributes: [
                  {
                    name: 'value',
                    value: 10
                  }
                ],
                content: '10% - Bad',
              },
              {
                tag: 'option',
                attributes: [
                  {
                    name: 'value',
                    value: 5
                  }
                ],
                content: '5% - Terrible',
              },

            ]
          },
          {
            tag: 'h3',
            class: 'body-questions',
            content: 'How many people are sharing the bill?'
          },
          {
            tag: 'label',
            childs: [
              {
                tag: 'input',
                attributes: [
                  {
                    name: 'type',
                    value: 'number'
                  },
                  {
                    name: 'value',
                    value: 1
                  },
                  {
                    name: 'name',
                    value: 'number'
                  },
                  {
                    name: 'required',
                    value: true
                  }
                ]
              },
              {
                tag: 'span',
                content: ' people'
              },
            ]
          },
          {
            tag: 'input',
            class: 'btn',
            attributes: [
              {
                name: 'type',
                value: 'submit'
              },
              {
                name: 'value',
                value: 'Calculate!'
              }
            ]
          }
        ],
        event: {
          type: 'onsubmit',
          action: 'formsubmit'
        }
      },
      {
        tag: 'div',
        class: 'result',
      }
    ]
  }
];

function formSubmit(e){
  const amount = document.querySelector('input[name="amount"]').value;
  const percent = document.querySelector('select[name="percent"]').value;
  const number = document.querySelector('input[name="number"]').value;
  const tip = ((amount * percent) / (100 * number)).toFixed(2);
  const result = document.querySelector('.result');
  result.innerHTML = '';
  result.append(createElement(
    {
      tag: 'h3',
      class: 'result-text',
      content: 'TIP AMOUNT'
    }
  ));
  result.append(createElement(
    {
      tag: 'p',
      childs: [
        {
          tag: 'span',
          class: 'sign',
          content: '$'
        },
        {
          tag: 'span',
          class: 'tip-amount',
          content: tip
        }
      ]
    }
  ));
  if (number > 1) {
    result.append(createElement(
      {
        tag: 'h4',
        class: 'each',
        content: 'each'
      }
    ));
  }
  return false;
}

const app = document.getElementById('app');

function loadApp(theApp, theData){
  theData.forEach(item=>{
    theApp.append(createElement(item));
  });
}

function loadEventListener(identifier){
  if (identifier === 'formsubmit') {
    return formSubmit;
  }
  return ()=>{console.log("NOT FOUND!")};
}

function createElement(item){
  const element = document.createElement(item.tag);
  if (item.class) {
    element.classList.add(item.class);
  }
  if (item.attributes) {
    item.attributes.forEach(att => {
      element.setAttribute(att.name, att.value);
    });
  }
  if (item.childs){
    item.childs.forEach(child=>{
      element.append(createElement(child));
    });
  }
  if (item.content) {
    element.textContent = item.content;
  }
  if (item.event) {
    element[item.event.type] = loadEventListener(item.event.action);
  }
  return element;
}

loadApp(app, items);
