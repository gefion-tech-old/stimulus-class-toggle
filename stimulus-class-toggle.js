class ClassToggleController extends Stimulus.Controller {
	static targets = ['element']
    
   	static classes = ['on', 'off']
    
    static values = {
        status: Boolean
    }
    
    statusValueChanged() {
        this.elementTargets.forEach((target) => {
            if (this.statusValue) {
                if (this.hasOffClass) {
                	this.offClass.split(' ').forEach(className => {
                    	target.classList.remove(className)
                    })
                }
                
                if (this.hasOnClass) {
                	target.classList.add(...this.onClass.split(' '))
                }
            } else {
                if (this.hasOnClass) {
                	this.onClass.split(' ').forEach(className => {
                    	target.classList.remove(className)
                    })
                }
                
                if (this.hasOffClass) {
                	target.classList.add(...this.offClass.split(' '))
                }
            }
        })
    }
    
    on() {
    	this.statusValue = true
    }
    
    off() {
        this.statusValue = false
    }
    
    toggle() {
        this.statusValue = !this.statusValue
    }
}

(function() {
    let application;

    if (window.stimulusApplication) {
        application = window.stimulusApplication
    } else {
        application = Stimulus.Application.start()
    }

    application.register('class-toggle', ClassToggleController)

    window.stimulusApplication = application
})()
