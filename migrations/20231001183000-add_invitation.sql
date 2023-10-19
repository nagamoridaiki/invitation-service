-- +migrate Up

-- invitation
CREATE TABLE IF NOT EXISTS invitation (
  invitation_id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT'招待状ID',
  invitation_name VARCHAR(254) UNIQUE NOT NULL COMMENT'招待状名',
  user_id INT(10) COMMENT'ユーザーID',
  PRIMARY KEY(invitation_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='招待状';

-- +migrate Down

DROP TABLE IF EXISTS invitation;
