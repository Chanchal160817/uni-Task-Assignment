export type EmailPayload = {
  from: string;
  to: string;
  cc?: string;
  bcc?: string;
  templateId: string;
  templateAlias?: string;
  templateModel: Record<string, unknown>;
};

export type FirebasePayload = {
  deviceToken: string | string[];
  title?: string;
  message?: string;
  dynamicData?: any;
};

export type MagicBellPayload = {
  external_id?: string;
  title?: string;
  content?: string;
  action_url?: string;
  custom_attributes: Record<string, unknown>;
  user?: string;
  topic?: string;
  dynamicData?: any;
};

export type SMSPayload = {
  from?: string;
  to: string;
  body: string;
};

export type CreateNotificationTriggerAndQueueParams = {
  notification: Notification;
  delay: number;
  notificationData: Record<string, unknown>;
  additionalDataObj: any;
};
