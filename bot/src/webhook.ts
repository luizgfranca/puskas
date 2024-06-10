export type MessageContent = {
    "export type": string;
    "text": string;
}

export type Visitor = {
    "name": string;
    "firstName": string;
    "lastName": string;
}

export type Message = {
    "id": string;
    "from": string;
    "to": string;
    "direction": string;
    "channel": string;
    "visitor": Visitor
    "contents": MessageContent[]
    "timestamp": string;
    "idRef": string;
}

export type MessageWebhookRequest = {
    id :string;
    timestamp: string;
    type: string;
    subscriptionId: string;
    channel: string;
    direction: string;
    message: Message
}
  