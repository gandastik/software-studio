function timedCount() {
  let dateTime = new Date();
  postMessage(dateTime);
  setTimeout("timedCount()", 500);
}

timedCount();
