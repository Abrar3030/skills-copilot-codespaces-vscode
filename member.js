function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "PHP", "MySQL"];
    var member = {
        name: "John",
        age: 25,
        skills: skills,
        address: {
            street: "5th Avenue",
            city: "New York",
            country: "USA"
        },
        getSkills: function () {
            return this.skills;
        }
    };
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.address.street);
    console.log(member.address.city);
    console.log(member.address.country);
    console.log(member.getSkills());
    console.log(member.getSkills().length);
    console.log(member.getSkills()[2]);
}