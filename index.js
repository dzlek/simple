function vowelOne(s) {
  const vowels = "aeiouyAEIOUY";
  const res = s
    .toLowerCase()
    .split("")
    .map((value) => {
      for (let i = 0; i <= vowels.length; i++) {
        if (value === vowels[i]) return 1;
      }
      return 0;
    });

  console.log("return " + res);
}
vowelOne("abceios");
