let hasChanges: boolean = true;
const submit = () => {}; // arrow function
const cancel = () => {};

hasChanges && submit()
// submit if hasChanges is true
hasChanges || cancel()
// cancel if hasChanges is false
hasChanges ? submit() : cancel()
// submit if hasChanges is true, cancel otherwise