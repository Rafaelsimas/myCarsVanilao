let carros = [
  {
    nome: "prisma",
    modelo: "sedan",
    motor: "Combustão 1.4 Flex",
    anoFab: 2023,
    valor: 82000,
    urlImage:
      "<img src='https://www.agoramotor.com.br/wp-content/uploads/2022/08/chevrolet-prisma-em-2023-exerior.jpg' />",
  },
  {
    nome: "onix",
    modelo: "hatch",
    motor: "Combustão 1.0 flex",
    anoFab: 2019,
    valor: 55000,
    urlImage:
      "<img src='https://quatrorodas.abril.com.br/wp-content/uploads/2019/09/03_onix_joy_3_-e1567779497914.jpg?quality=70&strip=info' />",
  },
  {
    nome: "Peugeot",
    modelo: "suv",
    motor: "Combustão 1.4 Flex",
    anoFab: 2020,
    valor: 75000,
    urlImage:
      "<img src='https://revistacarro.com.br/wp-content/uploads/2021/06/peugeot-3008-gt-pack-2022_5.jpg' />",
  },
  {
    nome: "bmw",
    modelo: "sedan",
    motor: "Combustão 2.0 Álcool ",
    anoFab: 2017,
    valor: 75000,
    urlImage: "<img src='https://cdn.buttercms.com/tC0YCV2SDy94IwGWhSsQ'/>",
  },
];

const ulList = document.querySelector(".ulList");
const ulListFilter = document.querySelector(".ulListFilter");
const veiculo = document.querySelector("#veiculos");

function buscarVeiculo() {
  const novoArray = carros.find(carro => carro.nome === veiculo.value);
  for (let i in novoArray) {
    ulListFilter.innerHTML += 
    `
    <li>
        ${novoArray[i]} ;
    </li>

    `
  }
  limparDados();
}
renderizarVeiculos();
function renderizarVeiculos() {
  for (let i in carros) {
    ulList.innerHTML += `<li>
           Nome: ${carros[i].nome}<br/>
            Modelo: ${carros[i].modelo}<br/>
            Ano de fabricação: ${carros[i].anoFab}<br/>
            Valor R$: ${carros[i].valor}
            <img ${carros[i].urlImage}
            
        </li>`;
  }
}

function limparDados() {
  document.querySelector(".ulList").style.display = " none";
}
