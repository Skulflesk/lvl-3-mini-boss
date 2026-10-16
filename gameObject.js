function GameObject()
{
    this.x = 20;
    this.y = 20;
    this.width = 30;
    this.height = 100;
    this.radius = 10;
    this.color = "red";

    this.drawCircle = function()
    {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 360 * Math.PI / 180, true);
        context.fillStyle = this.color;
        context.fill();
    }

    this.drawRect = function()
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    this.update = function()
    {
        if (this.x + this.radius >= canvas.width)
        {
            this.x = canvas.width - this.radius;
            this.xSpeed = -this.xSpeed;
        }

        if (this.x - this.radius <= 0)
        {
            this.x = this.radius;
            this.xSpeed = -this.xSpeed;
        }

        if (this.y + this.radius >= canvas.height)
        {
            this.y = canvas.height - this.radius;
            this.ySpeed = -this.ySpeed * 10;
        }

        if (this.y - this.radius <= 0)
        {
            this.y = this.radius;
            this.ySpeed = -this.ySpeed * 10;
        }
    }
}