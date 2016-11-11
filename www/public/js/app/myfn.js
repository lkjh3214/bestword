define({
	baseUrl:"http://10.0.161.60",
	port:9000,
	getBaseURL: function(){
		return this.baseUrl+":"+this.port;
	}
})