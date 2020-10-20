# O que é o Leitor RFID?
## Módulo Leitor RFID MFRC522

<a function="goto3">LINK</a>
<a href="http://github.com">LINK</a>

<p>
O módulo leitor RFID (Radio Frequency Identification - Identificação por radiofrequência) é constituído do chip MFRC522 da empresa NXP. A comunicação é realizada na frequência de 13,56MHz. Permite ler e escrever em cartões que seguem o padrão MIFARE. Para isso, segue o protocolo de comunicação SPI. A figura abaixo apresenta os componentes que compõem o kit do módulo leitor.
</p>

<img source="image1_1" />

### Módulo leitor RFID

<p>
O módulo leitor RFID armazena um número de série em um microchip. A captura dos dados para identificação de objetos com dispositivos eletrônicos é realizada por meio de etiquetas eletrônicas, cartões, tag´s ou transponders que emitem sinais de radiofrequência para leitores que captam estas informações. Os cartões e os chaveiros contêm internamente um chip e uma antena como ilustra abaixo.
</p>

<img source="image1_2" />

### Cartão e chaveiro

<p>
Para realizar a comunicação, o chip contém uma interface de RF (radiofrequência) e alguns blocos, com destaque para a memória EEPROM, na qual encontram-se os dados lidos e gravados.
</p>

## Comunicação entre o Arduino e o módulo RFDI- RC522

<p>
A comunicação entre o Arduino e o módulo RFDI-RC522 segue o protocolo SPI (Detalhes em leitura complementar). Nesta comunicação, o Arduino assume a função de mestre e o módulo MFID - RC522 a função de escravo, como ilustra a figura abaixo.
</p>

<img source="image1_3" />

### Comunicação entre o Arduino e o módulo RFID RC522

## Os sinais utilizados na comunicação são:

- **MOSI (Master Output/Slave Input):** O mestre envia os dados para o escravo.
- **MISO (Master Input/Slave Output):** O escravo envia os dados para o mestre.
- **SCK (Serial Clock):** Realiza o sincronismo por meio do clock.
- **SDA no módulo RFID ou SS ou CS (Slave Select ou Chip Select) em outros dispositivos:** O mestre seleciona o dispositivo escravo.

## Etapas da comunicação SPI:

<ol>
<li> O Mestre (Arduino) envia o sinal de Clock; </li>
<li> O Mestre (Arduino) coloca a linha SDA no MFRC522 em 0 Volt para ativar a seleção do escravo(MFRC522); </li>
<li>O Mestre (Arduino) envia dados (sequência de bits) através da linha MOSI e o escravo (MFRC522) lê/recebe os bits transmitidos;</li>
<li>Se houver necessidade de resposta do escravo, este (MFRC522) retorna os dados para o mestre (Arduino) por meio da linha MISO e o mestre (Arduino) lê/recebe os bits transmitidos.</li>
</ol>

#### O módulo RFID-RC22 deve ser ligado em 3,3V
