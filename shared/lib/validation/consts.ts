export const passwordValidation = {
  MIN_LENGTH: 6,
  MAX_LENGTH: 20,
  REGEX:
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*["!#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])(?!.*[А-Яа-я]).+$/,
  ERROR_MESSAGES: {
    PATTERN:
      "Password must contain 0-9, a-z, A-Z, ! \" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~",
    MISMATCH: "The passwords must match",
  },
} as const;

export const usernameValidation = {
  MIN_LENGTH: 6,
  MAX_LENGTH: 30,
  REGEX: /^[a-z0-9_-]+$/,
  ERROR_MESSAGES: {
    PATTERN: "Username can only contain lowercase letters, numbers, underscores, and hyphens",
  },
} as const;
export const emailValidation = {
  REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  ERROR_MESSAGES: "Please enter a valid email address",
};
