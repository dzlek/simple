function bingo(ticket, win) {
  let miniWin = 0;
  const res = ticket.map((el) => {
    let mini = 0;
    el[0].split("").forEach((value, i) => {
      if (value.charCodeAt(0) === el[1]) mini++;
    });
    if (mini > 0) miniWin++;
  });

  return miniWin >= win ? "Winner!" : "Loser!";
}

bingo(
  [
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
  ],
  2
);
