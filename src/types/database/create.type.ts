import { uuid } from '../generic/uuid.type';

export type Create<T extends { createdAt: Date; updatedAt: Date; id: uuid }> =
  Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
