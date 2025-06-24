export default class jCount {
	/**
	 * @typedef {Object} settings
	 * @property {element | null}       inputElement   - Element of input element
	 * @property {element | null}       countElement   - Element of count element
	 * @property {boolean}              loadOnInit     - Should count characters on load
	 * @property {number}               minCount       - Minimum characters allowed in `inputElement`
	 * @property {number}               maxCount       - Maximum characters allowed in `inputElement`
	 * @property {function | undefined} onInput        - Callback (function) to execute on every input event. It returns object: { count: [number], inputElement: [Element], countElement: [Element] }
	 */
	static defaults = {
		inputElement: null,
		countElement: null,
		loadOnInit: true,
		minCount: 0,
		maxCount: 0,
	};

	/**
	 * @param {function}
	 * @return {boolean}
	 */
	static isValidParam(param) {
		return param && typeof param === 'function';
	}

	/**
	 * A character counter class for input elements,
	 * can take [Object] parameter with several key/value {@link settings}
	 * @class jCount
	 * @param {object} options
	 */
	constructor(options) {
		this.options = Object.assign({}, jCount.defaults, options);
		this.#init();
	}

	#init() {
		this.#events();
		this.options.loadOnInit && this.#updateCounter();
	}

	#events() {
		this.options.inputElement.addEventListener('input', () => {
			this.#updateCounter();

			this.options.onInput && this.onInput(this.options.onInput);
		});
	}

	#updateCounter() {
		this.options.countElement.innerText = this.options.inputElement.value.length;
	}

	/**
	 * @param {function} callback
	 */
	onInput(callback) {
		if (jCount.isValidParam(callback)) {
			callback.call(this, {
				count: this.options.inputElement.value.length,
				inputElement: this.options.inputElement,
				countElement: this.options.countElement,
			});
		}
	}
}
