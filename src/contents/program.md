# Programação

## Bibliotecas utilizadas
Para realizar a programação, será necessário incluir duas bibliotecas a saber:
<ol>
<li><a href="https://www.arduino.cc/en/reference/SPI">SPI.h</a></li>
<li><a href="https://github.com/miguelbalboa/rfid">MFRC522.h</a></li>
</ol>

Deve-se criar um *objeto* para a biblioteca **MFRC522** com os seguintes parâmetros:

> `MFRC522  objeto(pino do sda, pino do reset);`

**Exemplo:**

> `MFRC522 m(10,9);`

Na utilização da biblioteca MFRC522 deve-se estabelecer a seguinte comunicação entre o Arduino e o módulo RFID-RC22 como ilustra abaixo:

<img source="image2_1" />

### Ligação do módulo RFDI-RC522 com Arduino
### <a href="https://www.moduloeletronica.com.br/blog?single=Cartoes-RFID-e-o-Modulo-MFRC522">Fonte</a>

## Instruções de iniciação

- Para iniciar a comunicação SPI deve-se utilizar a seguinte instrução:

> `SPI.begin( );`

- Para iniciar o módulo MFDI-RC522 utiliza-se a seguinte instrução:

> `Objeto.PCD_Init(  );`
