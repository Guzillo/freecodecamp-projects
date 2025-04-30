const projectStatus = {
  PENDING: {description: "Pending Execution"},
  SUCCESS: {description: "Executed Successfully"},
  FAILURE: {description: "Execution Failed"},
};

class ProjectIdea {
  constructor(title, description, status = projectStatus.PENDING) {
    this.title = title;
    this.description = description;
    this.status = status;
  }

  updateProjectStatus (newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  unpin(projectIdea) {
    const index = this.ideas.findIndex( (item) => item === projectIdea);
    if(index !== -1) {
      this.ideas.splice(index, 1);
      return;
    }
    console.log('project not found');
    return;
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    const {title, ideas} = this;
    let string = `${title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach( ({title, description: desc, status}) => {
      string += `${title} (${status.description}) - ${desc}\n`;
    });
    return string;
  }
}

const board = new ProjectIdeaBoard('moj board');
const idea1 = new ProjectIdea('chessboard', 'new chessboard project idea');
const idea2 = new ProjectIdea('todoapp', 'crazy todoist');
board.pin(idea1);
board.pin(idea2);
board.unpin(idea2);
console.log(new ProjectIdeaBoard("Empty Board").formatToString());  