export type LogType = "error" | "info" | "warning" | "debug" | "message";

export interface StackFrame {
  class: string | null;
  method: string | null;
  path: string;
  fileName: string;
  line: string;
  column: string;
}

export interface LogMessage {
  content: string[];
  type: LogType;
  subject: string;
  caller: StackFrame;
  timestamp: Date;
}

export interface LogOptions {
  subject?: string;
}
export interface EasyLogConfig {
  consoleDefaultStyle: "compact" | "full";
}
