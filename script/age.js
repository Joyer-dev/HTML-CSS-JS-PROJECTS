function calculateAge() {
    
    const dobInput = document.querySelector('.box').value;
    
    

    const dob = new Date(dobInput);
    const today = new Date();
    

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();
    
    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    

    document.querySelector('.agee').innerText = `You are ${age} years old.`;
}