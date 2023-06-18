const textarea = document.getElementById("textArea");

      textarea.addEventListener("focus", function () {
        this.rows = 4;
      });

      textarea.addEventListener("blur", function () {
        this.rows = 2;
      });

      const publishButton = document.getElementById("publish-button");

      publishButton.addEventListener("click", function () {
        $(".progress-loading").addClass("active");
        $("#myTabContent").addClass("d-none");
        setTimeout(function () {
          $(".progress-loading").removeClass("active");
          $("#myTabContent").removeClass("d-none");
        }, 2000);
      });