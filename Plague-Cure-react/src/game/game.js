class Country {
    constructor(name, healthy_num) {
    this.name = name;

    this.healthy_num = healthy_num;

    this.infectivity_num = 0;
    this.infectivity_rate = 3;

    this.death_num = null;
    this.death_rate = 0;

    this.isCountryAlive = true

    this.updateInterval = null
  }
  populationUpdater(){
    this.infectivity_num += this.infectivity_rate
  }

  startUpdate(setUpdated){
    if (!this.updateInterval){
      this.updateInterval = setInterval(()=>{
        this.populationUpdater()
        setUpdated(this.infectivity_num)
      }, 100)
    }
  }

  stopUpdate(){
    clearInterval(this.updateInterval)
    this.updateInterval = null
  }

}

export default Country
