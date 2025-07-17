<template>
  <div class="chat-container">
    <div class="chat-box">
      <div class="messages" ref="messagesContainer">
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="message"
          :class="{ 'own-message': msg.sender_id === userId }"
        >
          <span>{{ msg.sender_id === userId ? 'Você' : 'Outro' }}:</span>
          <p>{{ msg.content }}</p>
        </div>
      </div>

      <form @submit.prevent="sendMessage" class="input-area">
        <input
          v-model="receiverId"
          placeholder="ID do destinatário"
          class="recipient"
        />
        <div class="input-wrapper">
          <input
            v-model="content"
            placeholder="Escreva sua mensagem..."
            class="message-input"
          />
          <button type="submit" class="send-button">➤</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '@/api'

export default {
  props: ['token', 'userId'],
  data() {
    return {
      messages: [],
      content: '',
      receiverId: ''
    }
  },
  async mounted() {
    await this.fetchMessages()
    this.scrollToBottom()
  },
  updated() {
    this.scrollToBottom()
  },
  methods: {
    async fetchMessages() {
      const res = await api.get('/messages', {
    headers: { Authorization: `Bearer ${this.token}` }
  })
  this.messages = res.data
    },
    async sendMessage() {
      try {
        await api.post(
      '/messages',
      {
        message: {
          receiver_id: this.receiverId,
          content: this.content
        }
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }
    )

    this.content = ''
    await this.fetchMessages()
  } catch (error) {
    const errors =
      error.response?.data?.errors ||
      error.response?.data?.error ||
      error.message
    alert(
      'Erro ao enviar mensagem: ' +
        (Array.isArray(errors) ? errors.join(', ') : errors)
    )
    console.error('Erro ao enviar mensagem:', errors)
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const container = this.$refs.messagesContainer
        container.scrollTop = container.scrollHeight
      })
    }
  }
}
</script>

<style scoped>
.chat-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
  padding: 20px;
  box-sizing: border-box;
}

.chat-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  height: 90vh;
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 0 10px #00000055;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.5;
  background-color: #2b2b2b;
  color: #f1f1f1;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  align-self: flex-start;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}


.own-message {
  background-color: #005fff;
  color: white;
  align-self: flex-end;
}

.message span {
  font-size: 11px;
  color: #b0b0b0;
  display: block;
  margin-bottom: 4px;
}

.message p {
  margin: 0;
  padding: 0;
}

.input-area {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.recipient {
  padding: 10px;
  font-size: 14px;
  border-radius: 6px;
  border: none;
  background-color: #2a2a2a;
  color: #ddd;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 6px;
  padding: 4px;
}

.message-input {
  flex: 1;
  padding: 10px;
  font-size: 14px;
  border: none;
  background: transparent;
  color: white;
}

.send-button {
  background-color: #005fff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s ease;
}

.send-button:hover {
  background-color: #0047c2;
}
</style>
