# LEITURA COMPLEMENTAR
	
## Detalhes do Chip nos cartões e chaveiro MIFARE

Interno ao chip dos cartões e chaveiros MIFARE existe a memória **EEPROM**. Esta podem ser de 1KB, 2KB e 4KB. Todas essas memórias são divididas em setores, cada setor divididos em blocos.
A memória EEPROM é dividida da seguinte forma: “Manufacturer Block” (bloco do fabricante), “Data Blocks” (blocos de dados) e “Sector Trailer”.  <br>
Manufacturer Block corresponde ao primeiro bloco do primeiro setor. Nele é armazenado as informações do fabricante entre elas a identidade única (UID – Unique Identifier) ocupando o espaço de 4 ou 7 bytes. <br>
Os três primeiros blocos de cada setor são utilizados para armazenar dados (read/write blocks). O último bloco de cada setor (Sector Trailer) é utilizado para armazenar as chaves de acesso (Key A e Key B).<br>

Para ler os dados do chip faz-se necessário o módulo MFRC522 para estabelecer uma comunicação sem contato na frequência de 13,5MHz.

## A comunicação entre o Arduino e o módulo MFRC522

Na comunicação entre o Arduino e o módulo MFRC522 segue o modelo Mestre/escravo em que o Arduini assume a função de mestre e o módulo MFRC522 a função de escravo. Esta comunicação é realizada seguindo o protocolo SPI (Serial Peripheral Interface).

### Protocolo SPI (Serial Peripheral Interface)
A transmissão dos dados é realizada através de mudanças rápidas na voltagem por meio de fio fisicamente conectado entre os dispositivos (linha de dados).  É uma comunicação serial síncrona. A figura 01 ilustra a transmissão dos dados. A velocidade máxima de transmissão é de 10Mbps.

<img source="image4_1" />

### Transmissão dos dados
### <a href="http://blog.moduloeletronica.com.br/cartoes-rfid-e-o-modulo-mfrc522/">Fonte</a>


<img source="image4_2" />
