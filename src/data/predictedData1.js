const data = [
  [
  {"0": 0.058855870272964239, "rating": "Very Low"},
  {"0.5": 0.065536177949979901, "rating": "Low"},
  {"1": 0.061747092753648758, "rating": "Low"},
  {"1.5": 0.061747092753648758, "rating": "Low"},
  {"2": 0.061747092753648758, "rating": "Low"},
  {"2.5": 0.061747092753648758, "rating": "Low"},
  {"3": 0.061747092753648758, "rating": "Low"},
  {"3.5": 0.061747092753648758, "rating": "Low"},
  {"4": 0.056977591011673212, "rating": "Very Low"},
  {"4.5": 0.067867893725633621, "rating": "Low"},
  {"5": 0.058206632267683744, "rating": "Very Low"},
  {"5.5": 0.064804979134351015, "rating": "Low"},
  {"6": 0.064804979134351015, "rating": "Low"},
  {"6.5": 0.065268287900835276, "rating": "Low"},
  {"7": 0.06416815472766757, "rating": "Low"},
  {"7.5": 0.06828402541577816, "rating": "Low"},
  {"8": 0.061157113872468472, "rating": "Low"},
  {"8.5": 0.081751120742410421, "rating": "Low"},
  {"9": 0.072308097034692764, "rating": "Low"},
  {"9.5": 0.085744173964485526, "rating": "Low"},
  {"10": 0.083893343340605497, "rating": "Low"},
  {"10.5": 0.083893343340605497, "rating": "Low"},
  {"11": 0.080605256836861372, "rating": "Low"},
  {"11.5": 0.08252777112647891, "rating": "Low"},
  {"12": 0.08252777112647891, "rating": "Low"},
  {"12.5": 0.08252777112647891, "rating": "Low"},
  {"13": 0.08252777112647891, "rating": "Low"},
  {"13.5": 0.08252777112647891, "rating": "Low"},
  {"14": 0.08252777112647891, "rating": "Low"},
  {"14.5": 0.08252777112647891, "rating": "Low"},
  {"15": 0.087784850504249334, "rating": "Low"},
  {"15.5": 0.085049338173121214, "rating": "Low"},
  {"16": 0.090236669406294823, "rating": "Low"},
  {"16.5": 0.08245889050886035, "rating": "Low"},
  {"17": 0.084628605749458075, "rating": "Low"},
  {"17.5": 0.084628605749458075, "rating": "Low"},
  {"18": 0.10703360242769122, "rating": "Average"},
  {"18.5": 0.10703360242769122, "rating": "Average"},
  {"19": 0.095155051443725824, "rating": "Average"},
  {"19.5": 0.12154305703006685, "rating": "High"},
  {"20": 0.11462738551199436, "rating": "High"},
  {"20.5": 0.10652926005423069, "rating": "High"},
  {"21": 0.093729154672473669, "rating": "Above Average"},
  {"21.5": 0.093861904926598072, "rating": "Above Average"},
  {"22": 0.092847057152539492, "rating": "Above Average"},
  {"22.5": 0.064877292141318321, "rating": "Very Low"},
  {"23": 0.065957745537161827, "rating": "Very Low"},
  {"23.5": 0.065957745537161827, "rating": "Very Low"}
], [
  {"0": 0.058855870272964239, "rating": "Very Low"},
  {"0.5": 0.065536177949979901, "rating": "Low"},
  {"1": 0.061747092753648758, "rating": "Low"},
  {"1.5": 0.061747092753648758, "rating": "Low"},
  {"2": 0.061747092753648758, "rating": "Low"},
  {"2.5": 0.061747092753648758, "rating": "Low"},
  {"3": 0.061747092753648758, "rating": "Low"},
  {"3.5": 0.061747092753648758, "rating": "Low"},
  {"4": 0.056977591011673212, "rating": "Very Low"},
  {"4.5": 0.067867893725633621, "rating": "Low"},
  {"5": 0.058206632267683744, "rating": "Very Low"},
  {"5.5": 0.064804979134351015, "rating": "Low"},
  {"6": 0.064804979134351015, "rating": "Low"},
  {"6.5": 0.065268287900835276, "rating": "Low"},
  {"7": 0.06416815472766757, "rating": "Low"},
  {"7.5": 0.06828402541577816, "rating": "Low"},
  {"8": 0.061157113872468472, "rating": "Low"},
  {"8.5": 0.081751120742410421, "rating": "Low"},
  {"9": 0.072308097034692764, "rating": "Low"},
  {"9.5": 0.085744173964485526, "rating": "Low"},
  {"10": 0.083893343340605497, "rating": "Low"},
  {"10.5": 0.083893343340605497, "rating": "Low"},
  {"11": 0.080605256836861372, "rating": "Low"},
  {"11.5": 0.08252777112647891, "rating": "Low"},
  {"12": 0.08252777112647891, "rating": "Low"},
  {"12.5": 0.08252777112647891, "rating": "Low"},
  {"13": 0.08252777112647891, "rating": "Low"},
  {"13.5": 0.08252777112647891, "rating": "Low"},
  {"14": 0.08252777112647891, "rating": "Low"},
  {"14.5": 0.08252777112647891, "rating": "Low"},
  {"15": 0.087784850504249334, "rating": "Low"},
  {"15.5": 0.085049338173121214, "rating": "Low"},
  {"16": 0.090236669406294823, "rating": "Low"},
  {"16.5": 0.08245889050886035, "rating": "Low"},
  {"17": 0.084628605749458075, "rating": "Low"},
  {"17.5": 0.084628605749458075, "rating": "Low"},
  {"18": 0.10703360242769122, "rating": "Average"},
  {"18.5": 0.10703360242769122, "rating": "Average"},
  {"19": 0.095155051443725824, "rating": "Average"},
  {"19.5": 0.12154305703006685, "rating": "High"},
  {"20": 0.11462738551199436, "rating": "High"},
  {"20.5": 0.10652926005423069, "rating": "High"},
  {"21": 0.093729154672473669, "rating": "Above Average"},
  {"21.5": 0.093861904926598072, "rating": "Above Average"},
  {"22": 0.092847057152539492, "rating": "Above Average"},
  {"22.5": 0.064877292141318321, "rating": "Very Low"},
  {"23": 0.065957745537161827, "rating": "Very Low"},
  {"23.5": 0.065957745537161827, "rating": "Very Low"}
],
[
  {"0": 0.058855870272964239, "rating": "Very Low"},
  {"0.5": 0.065536177949979901, "rating": "Low"},
  {"1": 0.061747092753648758, "rating": "Low"},
  {"1.5": 0.061747092753648758, "rating": "Low"},
  {"2": 0.061747092753648758, "rating": "Low"},
  {"2.5": 0.061747092753648758, "rating": "Low"},
  {"3": 0.061747092753648758, "rating": "Low"},
  {"3.5": 0.061747092753648758, "rating": "Low"},
  {"4": 0.056977591011673212, "rating": "Very Low"},
  {"4.5": 0.067867893725633621, "rating": "Low"},
  {"5": 0.058206632267683744, "rating": "Very Low"},
  {"5.5": 0.064804979134351015, "rating": "Low"},
  {"6": 0.064804979134351015, "rating": "Low"},
  {"6.5": 0.065268287900835276, "rating": "Low"},
  {"7": 0.06416815472766757, "rating": "Low"},
  {"7.5": 0.06828402541577816, "rating": "Low"},
  {"8": 0.061157113872468472, "rating": "Low"},
  {"8.5": 0.081751120742410421, "rating": "Low"},
  {"9": 0.072308097034692764, "rating": "Low"},
  {"9.5": 0.085744173964485526, "rating": "Low"},
  {"10": 0.083893343340605497, "rating": "Low"},
  {"10.5": 0.083893343340605497, "rating": "Low"},
  {"11": 0.080605256836861372, "rating": "Low"},
  {"11.5": 0.08252777112647891, "rating": "Low"},
  {"12": 0.08252777112647891, "rating": "Low"},
  {"12.5": 0.08252777112647891, "rating": "Low"},
  {"13": 0.08252777112647891, "rating": "Low"},
  {"13.5": 0.08252777112647891, "rating": "Low"},
  {"14": 0.08252777112647891, "rating": "Low"},
  {"14.5": 0.08252777112647891, "rating": "Low"},
  {"15": 0.087784850504249334, "rating": "Low"},
  {"15.5": 0.085049338173121214, "rating": "Low"},
  {"16": 0.090236669406294823, "rating": "Low"},
  {"16.5": 0.08245889050886035, "rating": "Low"},
  {"17": 0.084628605749458075, "rating": "Low"},
  {"17.5": 0.084628605749458075, "rating": "Low"},
  {"18": 0.10703360242769122, "rating": "Average"},
  {"18.5": 0.10703360242769122, "rating": "Average"},
  {"19": 0.095155051443725824, "rating": "Average"},
  {"19.5": 0.12154305703006685, "rating": "High"},
  {"20": 0.11462738551199436, "rating": "High"},
  {"20.5": 0.10652926005423069, "rating": "High"},
  {"21": 0.093729154672473669, "rating": "Above Average"},
  {"21.5": 0.093861904926598072, "rating": "Above Average"},
  {"22": 0.092847057152539492, "rating": "Above Average"},
  {"22.5": 0.064877292141318321, "rating": "Very Low"},
  {"23": 0.065957745537161827, "rating": "Very Low"},
  {"23.5": 0.065957745537161827, "rating": "Very Low"}
],
[
  {"0": 0.058855870272964239, "rating": "Very Low"},
  {"0.5": 0.065536177949979901, "rating": "Low"},
  {"1": 0.061747092753648758, "rating": "Low"},
  {"1.5": 0.061747092753648758, "rating": "Low"},
  {"2": 0.061747092753648758, "rating": "Low"},
  {"2.5": 0.061747092753648758, "rating": "Low"},
  {"3": 0.061747092753648758, "rating": "Low"},
  {"3.5": 0.061747092753648758, "rating": "Low"},
  {"4": 0.056977591011673212, "rating": "Very Low"},
  {"4.5": 0.067867893725633621, "rating": "Low"},
  {"5": 0.058206632267683744, "rating": "Very Low"},
  {"5.5": 0.064804979134351015, "rating": "Low"},
  {"6": 0.064804979134351015, "rating": "Low"},
  {"6.5": 0.065268287900835276, "rating": "Low"},
  {"7": 0.06416815472766757, "rating": "Low"},
  {"7.5": 0.06828402541577816, "rating": "Low"},
  {"8": 0.061157113872468472, "rating": "Low"},
  {"8.5": 0.081751120742410421, "rating": "Low"},
  {"9": 0.072308097034692764, "rating": "Low"},
  {"9.5": 0.085744173964485526, "rating": "Low"},
  {"10": 0.083893343340605497, "rating": "Low"},
  {"10.5": 0.083893343340605497, "rating": "Low"},
  {"11": 0.080605256836861372, "rating": "Low"},
  {"11.5": 0.08252777112647891, "rating": "Low"},
  {"12": 0.08252777112647891, "rating": "Low"},
  {"12.5": 0.08252777112647891, "rating": "Low"},
  {"13": 0.08252777112647891, "rating": "Low"},
  {"13.5": 0.08252777112647891, "rating": "Low"},
  {"14": 0.08252777112647891, "rating": "Low"},
  {"14.5": 0.08252777112647891, "rating": "Low"},
  {"15": 0.087784850504249334, "rating": "Low"},
  {"15.5": 0.085049338173121214, "rating": "Low"},
  {"16": 0.090236669406294823, "rating": "Low"},
  {"16.5": 0.08245889050886035, "rating": "Low"},
  {"17": 0.084628605749458075, "rating": "Low"},
  {"17.5": 0.084628605749458075, "rating": "Low"},
  {"18": 0.10703360242769122, "rating": "Average"},
  {"18.5": 0.10703360242769122, "rating": "Average"},
  {"19": 0.095155051443725824, "rating": "Average"},
  {"19.5": 0.12154305703006685, "rating": "High"},
  {"20": 0.11462738551199436, "rating": "High"},
  {"20.5": 0.10652926005423069, "rating": "High"},
  {"21": 0.093729154672473669, "rating": "Above Average"},
  {"21.5": 0.093861904926598072, "rating": "Above Average"},
  {"22": 0.092847057152539492, "rating": "Above Average"},
  {"22.5": 0.064877292141318321, "rating": "Very Low"},
  {"23": 0.065957745537161827, "rating": "Very Low"},
  {"23.5": 0.065957745537161827, "rating": "Very Low"}
],
[
  {"0": 0.058855870272964239, "rating": "Very Low"},
  {"0.5": 0.065536177949979901, "rating": "Low"},
  {"1": 0.061747092753648758, "rating": "Low"},
  {"1.5": 0.061747092753648758, "rating": "Low"},
  {"2": 0.061747092753648758, "rating": "Low"},
  {"2.5": 0.061747092753648758, "rating": "Low"},
  {"3": 0.061747092753648758, "rating": "Low"},
  {"3.5": 0.061747092753648758, "rating": "Low"},
  {"4": 0.056977591011673212, "rating": "Very Low"},
  {"4.5": 0.067867893725633621, "rating": "Low"},
  {"5": 0.058206632267683744, "rating": "Very Low"},
  {"5.5": 0.064804979134351015, "rating": "Low"},
  {"6": 0.064804979134351015, "rating": "Low"},
  {"6.5": 0.065268287900835276, "rating": "Low"},
  {"7": 0.06416815472766757, "rating": "Low"},
  {"7.5": 0.06828402541577816, "rating": "Low"},
  {"8": 0.061157113872468472, "rating": "Low"},
  {"8.5": 0.081751120742410421, "rating": "Low"},
  {"9": 0.072308097034692764, "rating": "Low"},
  {"9.5": 0.085744173964485526, "rating": "Low"},
  {"10": 0.083893343340605497, "rating": "Low"},
  {"10.5": 0.083893343340605497, "rating": "Low"},
  {"11": 0.080605256836861372, "rating": "Low"},
  {"11.5": 0.08252777112647891, "rating": "Low"},
  {"12": 0.08252777112647891, "rating": "Low"},
  {"12.5": 0.08252777112647891, "rating": "Low"},
  {"13": 0.08252777112647891, "rating": "Low"},
  {"13.5": 0.08252777112647891, "rating": "Low"},
  {"14": 0.08252777112647891, "rating": "Low"},
  {"14.5": 0.08252777112647891, "rating": "Low"},
  {"15": 0.087784850504249334, "rating": "Low"},
  {"15.5": 0.085049338173121214, "rating": "Low"},
  {"16": 0.090236669406294823, "rating": "Low"},
  {"16.5": 0.08245889050886035, "rating": "Low"},
  {"17": 0.084628605749458075, "rating": "Low"},
  {"17.5": 0.084628605749458075, "rating": "Low"},
  {"18": 0.10703360242769122, "rating": "Average"},
  {"18.5": 0.10703360242769122, "rating": "Average"},
  {"19": 0.095155051443725824, "rating": "Average"},
  {"19.5": 0.12154305703006685, "rating": "High"},
  {"20": 0.11462738551199436, "rating": "High"},
  {"20.5": 0.10652926005423069, "rating": "High"},
  {"21": 0.093729154672473669, "rating": "Above Average"},
  {"21.5": 0.093861904926598072, "rating": "Above Average"},
  {"22": 0.092847057152539492, "rating": "Above Average"},
  {"22.5": 0.064877292141318321, "rating": "Very Low"},
  {"23": 0.065957745537161827, "rating": "Very Low"},
  {"23.5": 0.065957745537161827, "rating": "Very Low"}
], 
[
  {"0": 0.058855870272964239, "rating": "Very Low"},
  {"0.5": 0.065536177949979901, "rating": "Low"},
  {"1": 0.061747092753648758, "rating": "Low"},
  {"1.5": 0.061747092753648758, "rating": "Low"},
  {"2": 0.061747092753648758, "rating": "Low"},
  {"2.5": 0.061747092753648758, "rating": "Low"},
  {"3": 0.061747092753648758, "rating": "Low"},
  {"3.5": 0.061747092753648758, "rating": "Low"},
  {"4": 0.056977591011673212, "rating": "Very Low"},
  {"4.5": 0.067867893725633621, "rating": "Low"},
  {"5": 0.058206632267683744, "rating": "Very Low"},
  {"5.5": 0.064804979134351015, "rating": "Low"},
  {"6": 0.064804979134351015, "rating": "Low"},
  {"6.5": 0.065268287900835276, "rating": "Low"},
  {"7": 0.06416815472766757, "rating": "Low"},
  {"7.5": 0.06828402541577816, "rating": "Low"},
  {"8": 0.061157113872468472, "rating": "Low"},
  {"8.5": 0.081751120742410421, "rating": "Low"},
  {"9": 0.072308097034692764, "rating": "Low"},
  {"9.5": 0.085744173964485526, "rating": "Low"},
  {"10": 0.083893343340605497, "rating": "Low"},
  {"10.5": 0.083893343340605497, "rating": "Low"},
  {"11": 0.080605256836861372, "rating": "Low"},
  {"11.5": 0.08252777112647891, "rating": "Low"},
  {"12": 0.08252777112647891, "rating": "Low"},
  {"12.5": 0.08252777112647891, "rating": "Low"},
  {"13": 0.08252777112647891, "rating": "Low"},
  {"13.5": 0.08252777112647891, "rating": "Low"},
  {"14": 0.08252777112647891, "rating": "Low"},
  {"14.5": 0.08252777112647891, "rating": "Low"},
  {"15": 0.087784850504249334, "rating": "Low"},
  {"15.5": 0.085049338173121214, "rating": "Low"},
  {"16": 0.090236669406294823, "rating": "Low"},
  {"16.5": 0.08245889050886035, "rating": "Low"},
  {"17": 0.084628605749458075, "rating": "Low"},
  {"17.5": 0.084628605749458075, "rating": "Low"},
  {"18": 0.10703360242769122, "rating": "Average"},
  {"18.5": 0.10703360242769122, "rating": "Average"},
  {"19": 0.095155051443725824, "rating": "Average"},
  {"19.5": 0.12154305703006685, "rating": "High"},
  {"20": 0.11462738551199436, "rating": "High"},
  {"20.5": 0.10652926005423069, "rating": "High"},
  {"21": 0.093729154672473669, "rating": "Above Average"},
  {"21.5": 0.093861904926598072, "rating": "Above Average"},
  {"22": 0.092847057152539492, "rating": "Above Average"},
  {"22.5": 0.064877292141318321, "rating": "Very Low"},
  {"23": 0.065957745537161827, "rating": "Very Low"},
  {"23.5": 0.065957745537161827, "rating": "Very Low"}
], 
[
  {"0": 0.058855870272964239, "rating": "Very Low"},
  {"0.5": 0.065536177949979901, "rating": "Low"},
  {"1": 0.061747092753648758, "rating": "Low"},
  {"1.5": 0.061747092753648758, "rating": "Low"},
  {"2": 0.061747092753648758, "rating": "Low"},
  {"2.5": 0.061747092753648758, "rating": "Low"},
  {"3": 0.061747092753648758, "rating": "Low"},
  {"3.5": 0.061747092753648758, "rating": "Low"},
  {"4": 0.056977591011673212, "rating": "Very Low"},
  {"4.5": 0.067867893725633621, "rating": "Low"},
  {"5": 0.058206632267683744, "rating": "Very Low"},
  {"5.5": 0.064804979134351015, "rating": "Low"},
  {"6": 0.064804979134351015, "rating": "Low"},
  {"6.5": 0.065268287900835276, "rating": "Low"},
  {"7": 0.06416815472766757, "rating": "Low"},
  {"7.5": 0.06828402541577816, "rating": "Low"},
  {"8": 0.061157113872468472, "rating": "Low"},
  {"8.5": 0.081751120742410421, "rating": "Low"},
  {"9": 0.072308097034692764, "rating": "Low"},
  {"9.5": 0.085744173964485526, "rating": "Low"},
  {"10": 0.083893343340605497, "rating": "Low"},
  {"10.5": 0.083893343340605497, "rating": "Low"},
  {"11": 0.080605256836861372, "rating": "Low"},
  {"11.5": 0.08252777112647891, "rating": "Low"},
  {"12": 0.08252777112647891, "rating": "Low"},
  {"12.5": 0.08252777112647891, "rating": "Low"},
  {"13": 0.08252777112647891, "rating": "Low"},
  {"13.5": 0.08252777112647891, "rating": "Low"},
  {"14": 0.08252777112647891, "rating": "Low"},
  {"14.5": 0.08252777112647891, "rating": "Low"},
  {"15": 0.087784850504249334, "rating": "Low"},
  {"15.5": 0.085049338173121214, "rating": "Low"},
  {"16": 0.090236669406294823, "rating": "Low"},
  {"16.5": 0.08245889050886035, "rating": "Low"},
  {"17": 0.084628605749458075, "rating": "Low"},
  {"17.5": 0.084628605749458075, "rating": "Low"},
  {"18": 0.10703360242769122, "rating": "Average"},
  {"18.5": 0.10703360242769122, "rating": "Average"},
  {"19": 0.095155051443725824, "rating": "Average"},
  {"19.5": 0.12154305703006685, "rating": "High"},
  {"20": 0.11462738551199436, "rating": "High"},
  {"20.5": 0.10652926005423069, "rating": "High"},
  {"21": 0.093729154672473669, "rating": "Above Average"},
  {"21.5": 0.093861904926598072, "rating": "Above Average"},
  {"22": 0.092847057152539492, "rating": "Above Average"},
  {"22.5": 0.064877292141318321, "rating": "Very Low"},
  {"23": 0.065957745537161827, "rating": "Very Low"},
  {"23.5": 0.065957745537161827, "rating": "Very Low"}
]
]
export default data;