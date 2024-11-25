import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    async fetchTasks() {
      return await repository.fetchTasks();
    },
  };
}
