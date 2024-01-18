const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	hooks.afterEach(() => {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	test('should have a number type of card image width and height', (assert) => {
		const cardImgEl = document.querySelector('.card__image img');
		const cardImgWidth = parseInt(cardImgEl.getAttribute('width'));
		const cardImgHeight = parseInt(cardImgEl.getAttribute('height'));

		assert.equal(typeof cardImgWidth, 'number');
		assert.equal(typeof cardImgHeight, 'number');
	});

	test("should have a title element that equals 'Equilibrium #3429'", (assert) => {
		const cardTitleEl = document.querySelector('.card__title');
		const cardTitle = cardTitleEl.textContent.trim();

		assert.equal(cardTitle, 'Equilibrium #3429');
	});

	test('should have two children inside of the article element', (assert) => {
		const articleEl = document.querySelector('article');
		const articleChildrenEls = articleEl.children;

		assert.strictEqual(articleChildrenEls.length, 2);
	});

	test('should have an empty alt attribute value of card image element', (assert) => {
		const cardImgEl = document.querySelector('.card__image img');
		const cardImgAlt = cardImgEl.getAttribute('alt');

		assert.equal(cardImgAlt, '');
	});
});
