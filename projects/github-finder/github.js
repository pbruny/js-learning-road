class GitHub {
    constructor() {
        this.client_id = 'fa153f12741fb5accd69';
        this.client_secret = 'de119f7bd984cc921ca0aac0032ba7c394e0330e';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}