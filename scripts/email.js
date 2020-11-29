function sendemail(sub, msg){
  Email.send({
    SecureToken : "76f4eaff-a944-4ed3-95ef-88c825c2bea5",
    To : 'appleiphone883@hotmail.com',
    From : "krkmotors-website@outlook.com",
    Subject : sub,
    Body : msg
}).then(
  displaySPrompt()
);

}