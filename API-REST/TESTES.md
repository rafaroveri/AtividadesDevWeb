# Testes da API REST

## Parte 2

### Atividade 2

O pet retornado foi o Rex.

Se eu passar um ID inexistente, o servidor retorna a mensagem: `"Pet não encontrado"`.

### Atividade 4

Se eu não enviar todos os campos, o PUT limpa os valores dos campos não enviados.

---

## Parte 3

### Perguntas para reflexão

1. O `PUT` atualiza todos os campos mesmo se eles não forem especificados no body; já o `PATCH` atualiza apenas os campos especificados.

2. Os dados são perdidos ao reiniciar o servidor.

3. Os dados estão armazenados na memória RAM.
