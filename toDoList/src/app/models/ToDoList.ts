export interface ToDoList {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: boolean;
}

/**
 * Data transfer Object
 */
export interface EditToDoItem extends Omit<ToDoList, 'id'|'priority'|'status'>{}
