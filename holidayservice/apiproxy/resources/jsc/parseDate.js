 var startDate = context.getVariable("startDate").split("/");
 var endDate = context.getVariable("endDate").split("/");
 
 var dateStart = new Date(startDate[2], startDate[0] - 1, startDate[1]);
 var dateEnd = new Date(endDate[2], endDate[0] - 1, endDate[1]);
 
 print("start:" + dateStart.toISOString());
 print("end:" + dateEnd.toISOString());
 
 context.setVariable("startDate", dateStart.toISOString());
 context.setVariable("endDate", dateEnd.toISOString());