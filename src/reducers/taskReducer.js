// export default function taskReducer(tasks, action) {

//Redux behind the seen use useImmerReducer  steps
export default function taskReducer(draft, action) {
  switch (action.type) {
    case "added": {
      //Normal ruducer function
      // return [
      //   ...tasks,
      //   {
      //     id: action.id,
      //     text: action.text,
      //     done: false,
      //   },
      // ];

      //useImmerReducer
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      //use break;
      break;
    }
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
      // return tasks.map((t) => {
      //   if (t.id === action.task.id) {
      //     return action.task;
      //   } else {
      //     return t;
      //   }
      // });
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`No action matched   with ${action.type}`);
    }
  }
  //------------------------
  //   if (action.type === "added") {
  //     return [
  //       ...tasks,
  //       {
  //         id: action.id,
  //         text: action.text,
  //         done: false,
  //       },
  //     ];
  //   } else if (action.type === "changed") {
  //     return tasks.map((t) => {
  //       if (t.id === action.task.id) {
  //         return action.task;
  //       } else {
  //         return t;
  //       }
  //     });
  //   } else if (action.type === "deleted") {
  //     return tasks.filter((t) => t.id !== action.id);
  //   } else {
  //     throw Error(`No action matched with ${action.type}`);
  //   }
  //-----------------
}
