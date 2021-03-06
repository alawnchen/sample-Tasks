var tasksViewModelModule = require("./tasks-view-model");
var viewModel = new tasksViewModelModule.TasksViewModel();
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = viewModel;
    viewModel.refresh();
}
exports.navigatingTo = navigatingTo;
function completeTaskButtonTap(args) {
    var view = args.view;
    var viewTaskViewModel = view.bindingContext;
    viewTaskViewModel.completeTask();
}
exports.completeTaskButtonTap = completeTaskButtonTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrcy50cyJdLCJuYW1lcyI6WyJuYXZpZ2F0aW5nVG8iLCJjb21wbGV0ZVRhc2tCdXR0b25UYXAiXSwibWFwcGluZ3MiOiJBQU1BLElBQU8sb0JBQW9CLFdBQVcsb0JBQW9CLENBQUMsQ0FBQTtBQUczRCxJQUFJLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFELHNCQUE2QixJQUFnQztJQUN6REEsSUFBSUEsSUFBSUEsR0FBb0JBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBO0lBQ3hDQSxJQUFJQSxDQUFDQSxjQUFjQSxHQUFHQSxTQUFTQSxDQUFDQTtJQUVoQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7QUFDeEJBLENBQUNBO0FBTGUsb0JBQVksZUFLM0IsQ0FBQTtBQUVELCtCQUFzQyxJQUFxQztJQUN2RUMsSUFBSUEsSUFBSUEsR0FBb0JBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO0lBQ3RDQSxJQUFJQSxpQkFBaUJBLEdBQThDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQTtJQUN2RkEsaUJBQWlCQSxDQUFDQSxZQUFZQSxFQUFFQSxDQUFDQTtBQUNyQ0EsQ0FBQ0E7QUFKZSw2QkFBcUIsd0JBSXBDLENBQUEifQ==