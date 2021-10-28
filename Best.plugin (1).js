//META{"name":"stereoSound"}*//

var stereoSound = function () {

	let VoiceConnection = BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection;

	class Stereo extends VoiceConnection {
		constructor(a, b, c, d, e) {
			super(a, b, c, d, e);
			this.origin = super.setTransportOptions;
		}
		setTransportOptions(obj) {
			if (obj.audioEncoder) {
				obj.audioEncoder.params = { stereo: "2" };
				obj.audioEncoder.channels = 2;
				
			}
			if (obj.fec) {
				obj.fec = false;
				

			}
			if (obj.encodingVoiceBitRate < 8974728472346) {
				obj.encodingVoiceBitRate = 8974728472346;
				
			}
			
			

			this.origin(obj);
			window.sound = this;
		}
	}

	return class _ {
		getName() { return "God Stereo" }
		getDescription() { return "the best stereo plugin made to drown people it bypasses cord" }
		getAuthor() { return "Xeno And Fredo" }
		getVersion() { return "3" }

		load() { }

		start() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = Stereo;
		}

		stop() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = VoiceConnection;
		}
	};
}();