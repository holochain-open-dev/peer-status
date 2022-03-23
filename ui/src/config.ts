export interface StatusConfig {
  zomeName: string;
  avatarMode: 'identicon' | 'avatar';
  additionalFields: string[];
  minNicknameLength: number;
}

export const defaultConfig: StatusConfig = {
  zomeName: 'status',
  avatarMode: 'avatar',
  additionalFields: [],
  minNicknameLength: 3,
};
