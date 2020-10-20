# Exemplo

## Enunciado: 
Elabore um programa para realizar a leitura de um *cartão RFID*. Se o cartão lido estiver sido cadastrado, um led *verde* conectado ao pino **3** acende. Se o cartão não estiver cadastrado, um led *vermelho* conectado ao pino **2** acende. **Todas as informações devem ser visualizadas no monitor serial.**

## Solução:

### Montagem
A figura a seguir apresenta a ligação do arduino no módulo

<img source="image3_1" />
<img source="image3_2" />

### Programa

Primeiramente, execute o programa abaixo, aproxime uma tag e obtenha o valor pelo monitor serial. Posteriormente, altere o valor em “EC 63 7E 2B” que é o valor colocado no programa. Novamente, aproxime a tag e veja que o led verde acende.

```
#include <SPI.h>
#include <MFRC522.h>
#define SDA 10
#define RST 9
#define M 2
#define V 3 
char st[20];
MFRC522 m(SDA, RST);

void setup()
{
  Serial.begin(9600);
  SPI.begin();
   m.PCD_Init();
  Serial.println("Aproxime o seu cartao/TAG do leitor");
  Serial.println();
  pinMode(M, 2);
  pinMode(V, 3);
}
void loop()
{
  digitalWrite (V, LOW);
  digitalWrite (M, HIGH);
  // Busca novos cartões 
  if ( ! m.PICC_IsNewCardPresent())
  {
    return;
  }
  // Seleciona um catão a ser lido
  if ( ! m.PICC_ReadCardSerial())
  {
    return;
  }
  //Mostra ID na serial
  Serial.print("ID da tag:");
  String conteudo = "";
  byte letra;
  for (byte i = 0; i < m.uid.size; i++)
  {
    Serial.print(m.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(m.uid.uidByte[i], HEX);
    conteudo.concat(String(m.uid.uidByte[i] < 0x10 ? " 0" : " "));
    conteudo.concat(String(m.uid.uidByte[i], HEX));
  }
  Serial.println();
  Serial.print("Mensagem : ");
  conteudo.toUpperCase();
  if (conteudo.substring(1) == "EC 63 7E 2B") //ID CARTÃO
  {
    Serial.println("Acesso autorizado !");
    Serial.println();
    digitalWrite (V, HIGH);
    digitalWrite (M, LOW);
    delay(5000);//Delay apagar LED Verde
    digitalWrite (V, LOW);
    digitalWrite (M, HIGH);
  }
}
```

Quando o cartão não é cadastrado, no monitor serial, observa-se como ilustra a figura a seguir:

<img source="image3_3" />
